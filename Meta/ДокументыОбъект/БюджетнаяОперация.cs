
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
	public partial class БюджетнаяОперация:ДокументОбъект
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
		public V82.СправочникиСсылка.СценарииПланирования Сценарий {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public DateTime ПериодПланирования {get;set;}//Период планирования
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.СтатьиОборотовПоБюджетам СтатьяОборотов {get;set;}//Статья оборотов
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.КлассификаторЕдиницИзмерения ЕдиницаИзмерения {get;set;}//Единица измерения
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Подразделения ЦФО {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Проекты Проект {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public object Номенклатура {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(15.3)*/ Количество {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(15.2)*/ Цена {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(15.2)*/ Сумма {get;set;}
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(10.4)*/ КурсДокумента {get;set;}//Курс документа
		[DataMember]
		[ProtoMember(22)]
		public decimal/*(10)*/ КратностьДокумента {get;set;}//Кратность документа
		[DataMember]
		[ProtoMember(23)]
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public string/*(0)*/ Комментарий {get;set;}
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
						Insert Into _Document311(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld4985RRef
						,_Fld4986
						,_Fld4987RRef
						,_Fld4988RRef
						,_Fld4989RRef
						,_Fld4990RRef
						,_Fld4991RRef
						,_Fld4993
						,_Fld4994
						,_Fld4995
						,_Fld4996RRef
						,_Fld4997
						,_Fld4998
						,_Fld4999RRef
						,_Fld5000RRef
						,_Fld5001)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Сценарий
						,@ПериодПланирования
						,@СтатьяОборотов
						,@ЕдиницаИзмерения
						,@ЦФО
						,@Проект
						,@Контрагент
						,@Количество
						,@Цена
						,@Сумма
						,@ВалютаДокумента
						,@КурсДокумента
						,@КратностьДокумента
						,@Состояние
						,@Ответственный
						,@Комментарий)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document311
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld4985RRef	= @Сценарий
						,_Fld4986	= @ПериодПланирования
						,_Fld4987RRef	= @СтатьяОборотов
						,_Fld4988RRef	= @ЕдиницаИзмерения
						,_Fld4989RRef	= @ЦФО
						,_Fld4990RRef	= @Проект
						,_Fld4991RRef	= @Контрагент
						,_Fld4993	= @Количество
						,_Fld4994	= @Цена
						,_Fld4995	= @Сумма
						,_Fld4996RRef	= @ВалютаДокумента
						,_Fld4997	= @КурсДокумента
						,_Fld4998	= @КратностьДокумента
						,_Fld4999RRef	= @Состояние
						,_Fld5000RRef	= @Ответственный
						,_Fld5001	= @Комментарий
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ПериодПланирования", ПериодПланирования);
					Команда.Parameters.AddWithValue("Количество", Количество);
					Команда.Parameters.AddWithValue("Цена", Цена);
					Команда.Parameters.AddWithValue("Сумма", Сумма);
					Команда.Parameters.AddWithValue("КурсДокумента", КурсДокумента);
					Команда.Parameters.AddWithValue("КратностьДокумента", КратностьДокумента);
					Команда.Parameters.AddWithValue("Состояние", Состояние.Ключ());
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
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
					Команда.CommandText = @"Delete _Document311
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}