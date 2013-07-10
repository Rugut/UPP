
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
	[ProtoContract]
	[DataContract]
	public partial class СертификацияНоменклатуры:ДокументОбъект
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
		public V82.Перечисления/*Ссылка*/.ВидыОперацийСертификацияНоменклатуры ВидОперации {get;set;}//Вид операции
		///<summary>
		///Дата начала испытаний образцов (при внутренней сертификации)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public DateTime ДатаНачалаИспытаний {get;set;}//Дата начала испытаний
		///<summary>
		///Дата окончания испытаний образцов (при внутренней сертификации)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаОкончанияИспытаний {get;set;}//Дата окончания испытаний
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаСертификата {get;set;}//Дата сертификата
		[DataMember]
		[ProtoMember(13)]
		public object ДокументОснование {get;set;}//Документ основание
		///<summary>
		///Заключение контролирующего подразделения или органа сертификации
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public string/*(0)*/ Заключение {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Номенклатура Номенклатура {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public string/*(30)*/ НомерСертификата {get;set;}//Номер сертификата
		///<summary>
		///Нормативный документ, согласно которому осуществляется сертификация (для внутренней сертификации)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.НормативныеДокументыСертификацииНоменклатуры НормативныйДокумент {get;set;}//Нормативный документ
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Организация, проводящая отбор проб (для внешней сертификации)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Контрагенты ОрганПоСертификации {get;set;}//Орган по сертификации
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///"Отказ", если была предпринята попытка сертификации, но она не увенчалась успехом. "Сертификация" - увенчалась успехом
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public V82.Перечисления/*Ссылка*/.РезультатыСертификацииНоменклатуры РезультатСертификации {get;set;}//Результат сертификации
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.СерииНоменклатуры СерияНоменклатуры {get;set;}//Серия номенклатуры
		///<summary>
		///Срок окончания действия сертификата
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public DateTime СрокГодностиСертификата {get;set;}//Срок годности сертификата
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
						Insert Into _Document451(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld11477RRef
						,_Fld11478
						,_Fld11479
						,_Fld11480
						,_Fld11482
						,_Fld11483
						,_Fld11484RRef
						,_Fld11485
						,_Fld11486RRef
						,_Fld11487RRef
						,_Fld11488RRef
						,_Fld11489RRef
						,_Fld11490RRef
						,_Fld11491RRef
						,_Fld11492RRef
						,_Fld11493)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВидОперации
						,@ДатаНачалаИспытаний
						,@ДатаОкончанияИспытаний
						,@ДатаСертификата
						,@Заключение
						,@Комментарий
						,@Номенклатура
						,@НомерСертификата
						,@НормативныйДокумент
						,@Организация
						,@ОрганПоСертификации
						,@Ответственный
						,@Подразделение
						,@РезультатСертификации
						,@СерияНоменклатуры
						,@СрокГодностиСертификата)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document451
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld11477RRef	= @ВидОперации
						,_Fld11478	= @ДатаНачалаИспытаний
						,_Fld11479	= @ДатаОкончанияИспытаний
						,_Fld11480	= @ДатаСертификата
						,_Fld11482	= @Заключение
						,_Fld11483	= @Комментарий
						,_Fld11484RRef	= @Номенклатура
						,_Fld11485	= @НомерСертификата
						,_Fld11486RRef	= @НормативныйДокумент
						,_Fld11487RRef	= @Организация
						,_Fld11488RRef	= @ОрганПоСертификации
						,_Fld11489RRef	= @Ответственный
						,_Fld11490RRef	= @Подразделение
						,_Fld11491RRef	= @РезультатСертификации
						,_Fld11492RRef	= @СерияНоменклатуры
						,_Fld11493	= @СрокГодностиСертификата
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ДатаНачалаИспытаний", ДатаНачалаИспытаний);
					Команда.Parameters.AddWithValue("ДатаОкончанияИспытаний", ДатаОкончанияИспытаний);
					Команда.Parameters.AddWithValue("ДатаСертификата", ДатаСертификата);
					Команда.Parameters.AddWithValue("Заключение", Заключение);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("НомерСертификата", НомерСертификата);
					Команда.Parameters.AddWithValue("РезультатСертификации", РезультатСертификации.Ключ());
					Команда.Parameters.AddWithValue("СрокГодностиСертификата", СрокГодностиСертификата);
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
					Команда.CommandText = @"Delete _Document451
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}