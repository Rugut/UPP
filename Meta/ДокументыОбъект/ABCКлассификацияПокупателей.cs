
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Упр)
	///</summary>
	public partial class ABCКлассификацияПокупателей:ДокументОбъект
	{
		public DateTime ДатаНачала;//Дата начала
		public DateTime ДатаОкончания;//Дата окончания
		public decimal/*(4.2)*/ ПроцентAКласса;//Процент А класса
		public decimal/*(4.2)*/ ПроцентBКласса;//Процент B класса
		public decimal/*(4.2)*/ ПроцентCКласса;//Процент С класса
		public string/*(0)*/ Комментарий;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный;
	}
}