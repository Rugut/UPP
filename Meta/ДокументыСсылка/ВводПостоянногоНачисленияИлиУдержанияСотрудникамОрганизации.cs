
using System;
using V82;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	public partial class ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации:ДокументСсылка
	{
		public Guid Ссылка;
		public ulong Версия;
		public bool ПометкаУдаления;
		public DateTime Дата;
		public DateTime ПрефиксНомера;
		public string Номер;
		public bool Проведен;
		public V82.СправочникиСсылка.Организации Организация;
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий;
		public V82.СправочникиСсылка.Пользователи Ответственный;
		public string/*(100)*/ КраткийСоставДокумента;//Краткий состав документа
		public object ВидРасчета;//Вид расчета
		public decimal/*(1)*/ Действие;
		public DateTime ДатаДействия;//Дата действия
		public DateTime ДатаДействияКонец;//Дата действия конец
	}
}