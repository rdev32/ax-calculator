export var elements = [
  addElement("H", 1, 1, "Hydrogen", "I A", "Non-metal"),
  addElement("He", 2, 4, "Helium", "VIII A", "Noble gas"),
  addElement("Li", 3, 7, "Lithium", "I A", "Alkali metal"),
  addElement("Be", 4, 9, "Beryllium", "II A", "Alkaline earth metal"),
  addElement("B", 5, 11, "Boron", "III A", "Metalloid"),
  addElement("C", 6, 12, "Carbon", "IV A", "Non-metal"),
  addElement("N", 7, 14, "Nitrogen", "V A", "Non-metal"),
  addElement("O", 8, 16, "Oxygen", "VI A", "Non-metal"),
  addElement("F", 9, 19, "Fluorine", "VII A", "Halogen"),
  addElement("Ne", 10, 20, "Neon", "VIII A", "Noble gas"),
  addElement("Na", 11, 23, "Sodium", "I A", "Alkali metal"),
  addElement("Mg", 12, 24, "Magnesium", "II A", "Alkaline earth metal"),
  addElement("Al", 13, 27, "Aluminium", "III A", "Metal"),
  addElement("Si", 14, 28, "Silicon", "IV A", "Metalloid"),
  addElement("P", 15, 31, "Phosphorus", "V A", "Non-metal"),
  addElement("S", 16, 32, "Sulful", "VI A", "Non-metal"),
  addElement("Cl", 17, 35, "Chlorine", "VII A", "Halogen"),
  addElement("Ar", 18, 40, "Argon", "VIII A", "Noble gas"),
  addElement("K", 19, 39, "Potassium", "I A", "Alkali metal"),
  addElement("Ca", 20, 40, "Calcium", "II A", "Alkaline earth metal"),
  addElement("Sc", 21, 45, "Scandium", "III B", "Transition metal"),
  addElement("Ti", 22, 48, "Titanium", "IV B", "Transition metal"),
  addElement("V", 23, 51, "Vanadium", "V B", "Transition metal"),
  addElement("Cr", 24, 52, "Chromium", "VI B", "Transition metal"),
  addElement("Mn", 25, 55, "Manganese", "VII B", "Transition metal"),
  addElement("Fe", 26, 56, "Iron", "VIII B", "Transition metal"),
  addElement("Co", 27, 59, "Cobalt", "VIII B", "Transition metal"),
  addElement("Ni", 28, 59, "Nickel", "VIII B", "Transition metal"),
  addElement("Cu", 29, 64, "Copper", "I B", "Transition metal"),
  addElement("Zn", 30, 65, "Zinc", "II B", "Transition metal"),
  addElement("Ga", 31, 70, "Gallium", "III A", "Metal"),
  addElement("Ge", 32, 73, "Germanium", "IV A", "Metalloid"),
  addElement("As", 33, 75, "Arsenic", "V A", "Metalloid"),
  addElement("Se", 34, 79, "Selenium", "VI A", "Non-metal"),
  addElement("Br", 35, 80, "Bromine", "VII A", "Halogen"),
  addElement("Kr", 36, 84, "Krypton", "VIII A", "Noble gas"),
  addElement("Rb", 37, 85, "Rubidium", "IA", "Alkali metal"),
  addElement("Sr", 38, 88, "Strontium", "II A", "Metal"),
  addElement("Y", 39, 89, "Yttrium", "III B", "Transition metal"),
  addElement("Zr", 40, 91, "Zicronium", "IV B", "Transition metal"),
  addElement("Nb", 41, 93, "Niobium", "V B", "Transition metal"),
  addElement("Mo", 42, 96, "Molybdenum", "VI B", "Transition metal"),
  addElement("Tc", 43, 98, "Technetium", "VII B", "Transition metal"),
  addElement("Ru", 44, 101, "Ruthenium", "VIII B", "Transition metal"),
  addElement("Rh", 45, 102, "Rhodium", "VIII B", "Transition metal"),
  addElement("Pd", 46, 106, "Palladium", "VIII B", "Transition metal"),
  addElement("Ag", 47, 108, "Silver", "I B", "Transition metal"),
  addElement("Cd", 48, 112, "Cadmium", "II B", "Transition metal"),
  addElement("In", 49, 115, "Indium", "III A", "Metal"),
  addElement("Sn", 50, 119, "Tin", "IV A", "Metal"),
  addElement("Sb", 51, 122, "Antimony", "V A", "Metalloid")
]

/**
@param {string} simbol
@param {number} atomic_number
@param {number} atomic_mass
@param {string} name
@param {string} group
@param {string} type
**/
function addElement(simbol, atomic_number, atomic_mass, name, group, type) {
  var element = {
    "simbol" : simbol,
    "atomic_number" : atomic_number,
    "atomic_mass" : atomic_mass,
    "name" : name,
    "group": group,
    "type" : type
  }

  return element;
}