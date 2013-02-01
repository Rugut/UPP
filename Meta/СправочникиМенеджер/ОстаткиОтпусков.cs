
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.Справочники;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Справочники//Менеджер
{
	///<summary>
	///(Упр)
	///</summary>
	public partial class ОстаткиОтпусков:СправочникМенеджер
	{



		public static V82.СправочникиОбъект.ОстаткиОтпусков СоздатьЭлемент()
		{
			var Объект = new V82.СправочникиОбъект.ОстаткиОтпусков();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.ЭтоГруппа = false;
			Объект.Физлицо = new V82.СправочникиСсылка.ФизическиеЛица();
			return Объект;
		}
	}
}
