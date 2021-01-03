export const getAppetizers = (from, to) => {
        return(fetch(`https://tasty.p.rapidapi.com/recipes/list?tags=appetizers&from=${from}&sizes=${to}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "x-rapidapi-key": "c230e3695fmsha9ed1d6e32d23d4p15db27jsn32918691ea32"
        }
    }));
}

export const getBreakfast = (from, to) => {
    return(fetch(`https://tasty.p.rapidapi.com/recipes/list?tags=breakfast&from=${from}&sizes=${to}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "c230e3695fmsha9ed1d6e32d23d4p15db27jsn32918691ea32"
    }
}));
}

export const getLunch = (from, to) => {
    return(fetch(`https://tasty.p.rapidapi.com/recipes/list?tags=lunch&from=${from}&sizes=${to}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "c230e3695fmsha9ed1d6e32d23d4p15db27jsn32918691ea32"
    }
}));
}

export const getDinner = (from, to) => {
    return(fetch(`https://tasty.p.rapidapi.com/recipes/list?tags=dinner&from=${from}&sizes=${to}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "c230e3695fmsha9ed1d6e32d23d4p15db27jsn32918691ea32"
    }
}));
}

export const getDessert = (from, to) => {
    return(fetch(`https://tasty.p.rapidapi.com/recipes/list?tags=desserts&from=${from}&sizes=${to}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "c230e3695fmsha9ed1d6e32d23d4p15db27jsn32918691ea32"
    }
}));
}

export const getIndian = (from, to) => {
    return(fetch(`https://tasty.p.rapidapi.com/recipes/list?tags=indian&from=${from}&sizes=${to}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "c230e3695fmsha9ed1d6e32d23d4p15db27jsn32918691ea32"
	}
}));
}

export const getChinese = (from, to) => {
    return(fetch(`https://tasty.p.rapidapi.com/recipes/list?tags=chinese&from=${from}&sizes=${to}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "c230e3695fmsha9ed1d6e32d23d4p15db27jsn32918691ea32"
	}
}));
}

export const getItalian = (from, to) => {
    return(fetch(`https://tasty.p.rapidapi.com/recipes/list?tags=italian&from=${from}&sizes=${to}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "c230e3695fmsha9ed1d6e32d23d4p15db27jsn32918691ea32"
	}
}));
}

export const getReceipeById = (id) => {
    return(fetch(`https://tasty.p.rapidapi.com/recipes/detail?id=${id}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "x-rapidapi-key": "c230e3695fmsha9ed1d6e32d23d4p15db27jsn32918691ea32"
        }
    }));
}