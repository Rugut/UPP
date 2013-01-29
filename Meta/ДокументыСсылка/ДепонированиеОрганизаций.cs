
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	public partial class ДепонированиеОрганизаций:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация;
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный;
		public decimal/*(15.2)*/ СуммаДокумента;//Сумма документа
		public object СчетУчетаРасходов;//Счет учета расходов в БУ
		public object Субконто1;//Субконто номер 1
		public object Субконто2;//Субконто номер 2
		public object Субконто3;//Субконто номер 3
		public string/*(100)*/ КраткийСоставДокумента;//Краткий состав документа
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВНалоговомУчете;//Отражать в налоговом учете
	}
}
