
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Упр)
	///</summary>
	public partial class УчетФактическихДанныхПоБюджетам:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		public DateTime ДатаНачала;//Дата начала
		public DateTime ДатаКонца;//Дата конца
		public V82.СправочникиСсылка.Подразделения ЦФО;
		public V82.СправочникиСсылка.СтатьиОборотовПоБюджетам СтатьиОборотов;
		public V82.СправочникиСсылка.Пользователи Ответственный;
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние;
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
	}
}