
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ЗаявкаНаОткрытиеСчетов:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.БанковскиеСчета БанковскийСчет {get;set;}//Банковский счет
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ ТекстПодтверждения {get;set;}//Текст подтверждения
		[DataMember]
		[ProtoMember(13)]
		public string/*(20)*/ НомерДоговора {get;set;}//Номер договора
		[DataMember]
		[ProtoMember(14)]
		public string/*(4)*/ ОтделениеБанка {get;set;}//Отделение банка
		[DataMember]
		[ProtoMember(15)]
		public string/*(4)*/ ФилиалОтделенияБанка {get;set;}//Филиал отделения банка
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public string/*(0)*/ ВидВклада {get;set;}//Вид вклада
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Контрагенты Банк {get;set;}
		[DataMember]
		[ProtoMember(20)]
		public bool ВводНачальныхСведений {get;set;}//Ввод начальных сведений
		[DataMember]
		[ProtoMember(21)]
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		[DataMember]
		[ProtoMember(22)]
		public decimal/*(2)*/ ДатаВыплатыЗаработнойПлаты {get;set;}//Дата выплаты заработной платы
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document270(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld4714RRef
						,_Fld4715RRef
						,_Fld4716RRef
						,_Fld4717
						,_Fld4718
						,_Fld4719
						,_Fld4720
						,_Fld4721RRef
						,_Fld4722
						,_Fld4723
						,_Fld4724RRef
						,_Fld4725
						,_Fld21440
						,_Fld26740)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Ответственный
						,@БанковскийСчет
						,@ТекстПодтверждения
						,@НомерДоговора
						,@ОтделениеБанка
						,@ФилиалОтделенияБанка
						,@Валюта
						,@Комментарий
						,@ВидВклада
						,@Банк
						,@ВводНачальныхСведений
						,@КраткийСоставДокумента
						,@ДатаВыплатыЗаработнойПлаты)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document270
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld4714RRef	= @Организация
						,_Fld4715RRef	= @Ответственный
						,_Fld4716RRef	= @БанковскийСчет
						,_Fld4717	= @ТекстПодтверждения
						,_Fld4718	= @НомерДоговора
						,_Fld4719	= @ОтделениеБанка
						,_Fld4720	= @ФилиалОтделенияБанка
						,_Fld4721RRef	= @Валюта
						,_Fld4722	= @Комментарий
						,_Fld4723	= @ВидВклада
						,_Fld4724RRef	= @Банк
						,_Fld4725	= @ВводНачальныхСведений
						,_Fld21440	= @КраткийСоставДокумента
						,_Fld26740	= @ДатаВыплатыЗаработнойПлаты
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ТекстПодтверждения", ТекстПодтверждения);
					Команда.Parameters.AddWithValue("НомерДоговора", НомерДоговора);
					Команда.Parameters.AddWithValue("ОтделениеБанка", ОтделениеБанка);
					Команда.Parameters.AddWithValue("ФилиалОтделенияБанка", ФилиалОтделенияБанка);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ВидВклада", ВидВклада);
					Команда.Parameters.AddWithValue("ВводНачальныхСведений", ВводНачальныхСведений);
					Команда.Parameters.AddWithValue("КраткийСоставДокумента", КраткийСоставДокумента);
					Команда.Parameters.AddWithValue("ДатаВыплатыЗаработнойПлаты", ДатаВыплатыЗаработнойПлаты);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document270
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}