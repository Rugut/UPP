
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
	public partial class ПланируемоеПоступлениеДенежныхСредств:ДокументОбъект
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
		public V82.Перечисления/*Ссылка*/.ВидыОперацийПланируемоеПоступлениеДС ВидОперации {get;set;}//Вид операции
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public object КассаККМ {get;set;}//Касса ККМ
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаПоступления {get;set;}//Дата поступления
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public object ДокументОснование {get;set;}//Документ основание
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.ВидыДенежныхСредств ФормаОплаты {get;set;}//Форма оплаты
		///<summary>
		///Р/с, касса 
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public object БанковскийСчетКасса {get;set;}//Банковский счет касса
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(10.4)*/ КурсДокумента {get;set;}//Курс документа
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(10)*/ КратностьДокумента {get;set;}//Кратность документа
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		[DataMember]
		[ProtoMember(20)]
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		[DataMember]
		[ProtoMember(21)]
		public string/*(0)*/ Описание {get;set;}
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.СтатьиОборотовПоБюджетам СтатьяОборотов {get;set;}//Статья оборотов
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.Подразделения ЦФО {get;set;}
		[DataMember]
		[ProtoMember(27)]
		public bool ВключатьВПлатежныйКалендарь {get;set;}//Включать в платежный календарь
		[DataMember]
		[ProtoMember(28)]
		public V82.Перечисления/*Ссылка*/.ВидПриемаРозничнойВыручки ВидПриемаРозничнойВыручки {get;set;}//Вид приема розничной выручки
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
						Insert Into _Document384(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld8369RRef
						,_Fld8370RRef
						,_Fld8372
						,_Fld8374RRef
						,_Fld8376RRef
						,_Fld8377
						,_Fld8378
						,_Fld8379
						,_Fld8380RRef
						,_Fld8381
						,_Fld8382RRef
						,_Fld8383
						,_Fld8384RRef
						,_Fld8385RRef
						,_Fld8386RRef
						,_Fld8387
						,_Fld8388RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВидОперации
						,@Контрагент
						,@ДатаПоступления
						,@ФормаОплаты
						,@ВалютаДокумента
						,@КурсДокумента
						,@КратностьДокумента
						,@СуммаДокумента
						,@Состояние
						,@Описание
						,@Ответственный
						,@Комментарий
						,@Организация
						,@СтатьяОборотов
						,@ЦФО
						,@ВключатьВПлатежныйКалендарь
						,@ВидПриемаРозничнойВыручки)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document384
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld8369RRef	= @ВидОперации
						,_Fld8370RRef	= @Контрагент
						,_Fld8372	= @ДатаПоступления
						,_Fld8374RRef	= @ФормаОплаты
						,_Fld8376RRef	= @ВалютаДокумента
						,_Fld8377	= @КурсДокумента
						,_Fld8378	= @КратностьДокумента
						,_Fld8379	= @СуммаДокумента
						,_Fld8380RRef	= @Состояние
						,_Fld8381	= @Описание
						,_Fld8382RRef	= @Ответственный
						,_Fld8383	= @Комментарий
						,_Fld8384RRef	= @Организация
						,_Fld8385RRef	= @СтатьяОборотов
						,_Fld8386RRef	= @ЦФО
						,_Fld8387	= @ВключатьВПлатежныйКалендарь
						,_Fld8388RRef	= @ВидПриемаРозничнойВыручки
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ДатаПоступления", ДатаПоступления);
					Команда.Parameters.AddWithValue("ФормаОплаты", ФормаОплаты.Ключ());
					Команда.Parameters.AddWithValue("КурсДокумента", КурсДокумента);
					Команда.Parameters.AddWithValue("КратностьДокумента", КратностьДокумента);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("Состояние", Состояние.Ключ());
					Команда.Parameters.AddWithValue("Описание", Описание);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ВключатьВПлатежныйКалендарь", ВключатьВПлатежныйКалендарь);
					Команда.Parameters.AddWithValue("ВидПриемаРозничнойВыручки", ВидПриемаРозничнойВыручки.Ключ());
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
					Команда.CommandText = @"Delete _Document384
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}