
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
	public partial class ОплатаПоСреднемуЗаработку:ДокументОбъект
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
		public DateTime ПериодРегистрации {get;set;}//Период регистрации
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.СотрудникиОрганизаций Сотрудник {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.ФизическиеЛица Физлицо {get;set;}//Физическое лицо
		[DataMember]
		[ProtoMember(15)]
		public object ВидРасчета {get;set;}//Вид расчета
		///<summary>
		///Процент оплаты
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(6.2)*/ ПроцентОплаты {get;set;}//Процент оплаты
		[DataMember]
		[ProtoMember(17)]
		public DateTime ДатаНачала {get;set;}//Дата начала
		[DataMember]
		[ProtoMember(18)]
		public DateTime ДатаОкончания {get;set;}//Дата окончания
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(7.2)*/ ОплачиватьЧасов {get;set;}//Оплачивать часов
		[DataMember]
		[ProtoMember(20)]
		public V82.ДокументыСсылка.ОплатаПоСреднемуЗаработку ПерерассчитываемыйДокумент {get;set;}//Перерассчитываемый документ
		[DataMember]
		[ProtoMember(21)]
		public V82.Перечисления/*Ссылка*/.СпособыРегистрацииВремени СпособРегистрацииВремени {get;set;}//Способ регистрации времени
		[DataMember]
		[ProtoMember(22)]
		public V82.ДокументыСсылка.ПриемНаРаботуВОрганизацию УдалитьПриказ {get;set;}//Удалить приказ
		///<summary>
		///Дата начала события, оплачиваемого по среднему заработку
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public DateTime ДатаНачалаСобытия {get;set;}//Дата начала события
		///<summary>
		///Дата начала расчетного периода
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public DateTime ПериодРасчетаСреднегоЗаработкаНачало {get;set;}//Период расчета среднего заработка начало
		///<summary>
		///Дата окончания расчетного периода
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public DateTime ПериодРасчетаСреднегоЗаработкаОкончание {get;set;}//Период расчета среднего заработка окончание
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
						Insert Into _Document336(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld6692
						,_Fld6693RRef
						,_Fld6694
						,_Fld6695RRef
						,_Fld21693RRef
						,_Fld6696RRef
						,_Fld6698RRef
						,_Fld6699
						,_Fld6700
						,_Fld6701
						,_Fld6702
						,_Fld6703RRef
						,_Fld21694RRef
						,_Fld6697RRef
						,_Fld27062
						,_Fld27063
						,_Fld27064)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ПериодРегистрации
						,@Организация
						,@Комментарий
						,@Ответственный
						,@Сотрудник
						,@Физлицо
						,@ВидРасчета
						,@ПроцентОплаты
						,@ДатаНачала
						,@ДатаОкончания
						,@ОплачиватьЧасов
						,@ПерерассчитываемыйДокумент
						,@СпособРегистрацииВремени
						,@УдалитьПриказ
						,@ДатаНачалаСобытия
						,@ПериодРасчетаСреднегоЗаработкаНачало
						,@ПериодРасчетаСреднегоЗаработкаОкончание)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document336
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld6692	= @ПериодРегистрации
						,_Fld6693RRef	= @Организация
						,_Fld6694	= @Комментарий
						,_Fld6695RRef	= @Ответственный
						,_Fld21693RRef	= @Сотрудник
						,_Fld6696RRef	= @Физлицо
						,_Fld6698RRef	= @ВидРасчета
						,_Fld6699	= @ПроцентОплаты
						,_Fld6700	= @ДатаНачала
						,_Fld6701	= @ДатаОкончания
						,_Fld6702	= @ОплачиватьЧасов
						,_Fld6703RRef	= @ПерерассчитываемыйДокумент
						,_Fld21694RRef	= @СпособРегистрацииВремени
						,_Fld6697RRef	= @УдалитьПриказ
						,_Fld27062	= @ДатаНачалаСобытия
						,_Fld27063	= @ПериодРасчетаСреднегоЗаработкаНачало
						,_Fld27064	= @ПериодРасчетаСреднегоЗаработкаОкончание
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ПериодРегистрации", ПериодРегистрации);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ВидРасчета", Guid.Empty);
					Команда.Parameters.AddWithValue("ПроцентОплаты", ПроцентОплаты);
					Команда.Parameters.AddWithValue("ДатаНачала", ДатаНачала);
					Команда.Parameters.AddWithValue("ДатаОкончания", ДатаОкончания);
					Команда.Parameters.AddWithValue("ОплачиватьЧасов", ОплачиватьЧасов);
					Команда.Parameters.AddWithValue("ПерерассчитываемыйДокумент", ПерерассчитываемыйДокумент.Ссылка);
					Команда.Parameters.AddWithValue("СпособРегистрацииВремени", СпособРегистрацииВремени.Ключ());
					Команда.Parameters.AddWithValue("УдалитьПриказ", УдалитьПриказ.Ссылка);
					Команда.Parameters.AddWithValue("ДатаНачалаСобытия", ДатаНачалаСобытия);
					Команда.Parameters.AddWithValue("ПериодРасчетаСреднегоЗаработкаНачало", ПериодРасчетаСреднегоЗаработкаНачало);
					Команда.Parameters.AddWithValue("ПериодРасчетаСреднегоЗаработкаОкончание", ПериодРасчетаСреднегоЗаработкаОкончание);
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
					Команда.CommandText = @"Delete _Document336
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}