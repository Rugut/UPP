
using System;
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Регл)
	///</summary>
	public partial class СписаниеРасходовБудущихПериодов:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		public bool ОтражатьВБухгалтерскомУчете;//Отражать в бухгалтерском учете
		public bool ОтражатьВНалоговомУчете;//Отражать в налоговом учете
		public V82.СправочникиСсылка.Организации Организация;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный;
		public DateTime ПериодРегистрации;//Период регистрации
		public string/*(0)*/ Комментарий;
	}
}