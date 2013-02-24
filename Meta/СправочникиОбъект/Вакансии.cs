
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	[ProtoContract]
	[DataContract]
	public partial class Вакансии:СправочникОбъект
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
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Закрыта {get;set;}//Вакансия закрыта
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Должности Должность {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Пользователи Заявитель {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ Обязанности {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}//Ответственный за вакансию
		[DataMember]
		[ProtoMember(14)]
		public DateTime ПлановаяДатаЗакрытия {get;set;}//Плановая дата закрытия
		[DataMember]
		[ProtoMember(15)]
		public object Подразделение {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public string/*(0)*/ Требования {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public string/*(0)*/ Условия {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public DateTime ДатаОткрытия {get;set;}//Дата открытия
		[DataMember]
		[ProtoMember(19)]
		public DateTime ДатаЗакрытия {get;set;}//Дата закрытия
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для справочников.
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
						Insert Into _Reference39(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld1872
						,_Fld1873RRef
						,_Fld1874RRef
						,_Fld1875
						,_Fld1876RRef
						,_Fld1877RRef
						,_Fld1878
						,_Fld1880
						,_Fld1881
						,_Fld1882
						,_Fld1883)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@Закрыта
						,@Должность
						,@Заявитель
						,@Обязанности
						,@Организация
						,@Ответственный
						,@ПлановаяДатаЗакрытия
						,@Требования
						,@Условия
						,@ДатаОткрытия
						,@ДатаЗакрытия)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference39
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld1872	= @Закрыта
						,_Fld1873RRef	= @Должность
						,_Fld1874RRef	= @Заявитель
						,_Fld1875	= @Обязанности
						,_Fld1876RRef	= @Организация
						,_Fld1877RRef	= @Ответственный
						,_Fld1878	= @ПлановаяДатаЗакрытия
						,_Fld1880	= @Требования
						,_Fld1881	= @Условия
						,_Fld1882	= @ДатаОткрытия
						,_Fld1883	= @ДатаЗакрытия
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Закрыта", Закрыта);
					Команда.Parameters.AddWithValue("Должность", Должность.Ссылка);
					Команда.Parameters.AddWithValue("Заявитель", Заявитель.Ссылка);
					Команда.Parameters.AddWithValue("Обязанности", Обязанности);
					Команда.Parameters.AddWithValue("Организация", Организация.Ссылка);
					Команда.Parameters.AddWithValue("Ответственный", Ответственный.Ссылка);
					Команда.Parameters.AddWithValue("ПлановаяДатаЗакрытия", ПлановаяДатаЗакрытия);
					Команда.Parameters.AddWithValue("Требования", Требования);
					Команда.Parameters.AddWithValue("Условия", Условия);
					Команда.Parameters.AddWithValue("ДатаОткрытия", ДатаОткрытия);
					Команда.Parameters.AddWithValue("ДатаЗакрытия", ДатаЗакрытия);
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
					Команда.CommandText = @"Delete _Reference39
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/
		///////////////////////////////////////////////////////////////////////////////
		// ПРОЦЕДУРЫ - ОБРАБОТЧИКИ СОБЫТИЙ

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*ОбменДанными.Загрузка*/)
			{
			}
			/*// Заголовок для сообщений об ошибках записи.
*/
			/*Заголовок	= "Запись элемента справочника Вакансии"
				+ ?(ПустаяСтрока(Код), "", " с кодом " + Код)
				+ ?(ПустаяСтрока(Наименование), "", " и наименованием <" + Наименование + ">");*/
			if(true/*Должность.Пустая()*/)
			{
				//ОбщегоНазначения.СообщитьОбОшибке("Не указана должность!", Отказ, Заголовок);
			}
			//ТекстСообщенияОбОшибке	= "";
			//ВакансииПереопределяемый.ПроверитьЗначенияРеквизитов(ЭтотОбъект, Отказ, ТекстСообщенияОбОшибке);
			if(true/*Отказ*/)
			{
				//ОбщегоНазначения.СообщитьОбОшибке(ТекстСообщенияОбОшибке, Отказ, Заголовок);
			}
		}
		////////////////////////////////////////////////////////////////////////////////
	}
}