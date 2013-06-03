
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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ЗарплатаКВыплатеОрганизаций:ДокументОбъект
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
		public DateTime ПериодРегистрации {get;set;}//Период регистрации
		[DataMember]
		[ProtoMember(11)]
		public V82.Перечисления/*Ссылка*/.СпособыВыплатыЗарплаты СпособВыплаты {get;set;}//Способ выплаты
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///Количество дней, на которые задержана выплата зарплаты
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(5)*/ ДнейНеВыплаты {get;set;}//Дней не выплаты
		[DataMember]
		[ProtoMember(15)]
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		[DataMember]
		[ProtoMember(16)]
		public V82.Перечисления/*Ссылка*/.ХарактерВыплатыЗарплаты ХарактерВыплаты {get;set;}//Характер выплаты
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		[DataMember]
		[ProtoMember(18)]
		public object ДокументОснование {get;set;}//Документ основание
		[DataMember]
		[ProtoMember(19)]
		public DateTime ДатаНачала {get;set;}//Дата начала
		[DataMember]
		[ProtoMember(20)]
		public DateTime ДатаОкончания {get;set;}//Дата окончания
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Контрагенты Банк {get;set;}
		[DataMember]
		[ProtoMember(22)]
		public decimal/*(3)*/ ПроцентВыплаты {get;set;}//Процент выплаты
		[DataMember]
		[ProtoMember(23)]
		public bool ПредварительныйУчетУдержаний {get;set;}//Предварительный учет удержаний
		[DataMember]
		[ProtoMember(24)]
		public V82.Перечисления/*Ссылка*/.СпособыОкругленияЗарплатыКВыплате Округление {get;set;}
		[DataMember]
		[ProtoMember(25)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		[DataMember]
		[ProtoMember(26)]
		public bool ДанныеПрошлойВерсии {get;set;}//Перенесен из 7.7
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
						Insert Into _Document377(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld7442RRef
						,_Fld7443
						,_Fld7444RRef
						,_Fld7445RRef
						,_Fld7446
						,_Fld7447
						,_Fld7448
						,_Fld7449RRef
						,_Fld7450RRef
						,_Fld7452
						,_Fld7453
						,_Fld7454RRef
						,_Fld7455
						,_Fld7456
						,_Fld7457RRef
						,_Fld7458
						,_Fld7459)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@ПериодРегистрации
						,@СпособВыплаты
						,@Ответственный
						,@Комментарий
						,@ДнейНеВыплаты
						,@КраткийСоставДокумента
						,@ХарактерВыплаты
						,@ПодразделениеОрганизации
						,@ДатаНачала
						,@ДатаОкончания
						,@Банк
						,@ПроцентВыплаты
						,@ПредварительныйУчетУдержаний
						,@Округление
						,@СуммаДокумента
						,@ДанныеПрошлойВерсии)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document377
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld7442RRef	= @Организация
						,_Fld7443	= @ПериодРегистрации
						,_Fld7444RRef	= @СпособВыплаты
						,_Fld7445RRef	= @Ответственный
						,_Fld7446	= @Комментарий
						,_Fld7447	= @ДнейНеВыплаты
						,_Fld7448	= @КраткийСоставДокумента
						,_Fld7449RRef	= @ХарактерВыплаты
						,_Fld7450RRef	= @ПодразделениеОрганизации
						,_Fld7452	= @ДатаНачала
						,_Fld7453	= @ДатаОкончания
						,_Fld7454RRef	= @Банк
						,_Fld7455	= @ПроцентВыплаты
						,_Fld7456	= @ПредварительныйУчетУдержаний
						,_Fld7457RRef	= @Округление
						,_Fld7458	= @СуммаДокумента
						,_Fld7459	= @ДанныеПрошлойВерсии
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ПериодРегистрации", ПериодРегистрации);
					Команда.Parameters.AddWithValue("СпособВыплаты", СпособВыплаты.Ключ());
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ДнейНеВыплаты", ДнейНеВыплаты);
					Команда.Parameters.AddWithValue("КраткийСоставДокумента", КраткийСоставДокумента);
					Команда.Parameters.AddWithValue("ХарактерВыплаты", ХарактерВыплаты.Ключ());
					Команда.Parameters.AddWithValue("ДатаНачала", ДатаНачала);
					Команда.Parameters.AddWithValue("ДатаОкончания", ДатаОкончания);
					Команда.Parameters.AddWithValue("ПроцентВыплаты", ПроцентВыплаты);
					Команда.Parameters.AddWithValue("ПредварительныйУчетУдержаний", ПредварительныйУчетУдержаний);
					Команда.Parameters.AddWithValue("Округление", Округление.Ключ());
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("ДанныеПрошлойВерсии", ДанныеПрошлойВерсии);
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
					Команда.CommandText = @"Delete _Document377
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}