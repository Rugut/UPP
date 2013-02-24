
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
	///<summary>
	///Данный справочник содержит обработки обслуживания торгового оборудования.
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ОбработкиОбслуживанияТО:СправочникОбъект
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
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///Реквизит содержит описание обработки обслуживания.
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public string/*(0)*/ Описание {get;set;}//Описание обработки обслуживания
		///<summary>
		///Вид торгового оборудования, обслуживаемый настоящей обработкой обслуживания.
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ВидыТорговогоОборудования Вид {get;set;}//Вид торгового оборудования
		///<summary>
		///Имя файла обработки обслуживания.
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(256)*/ ИмяФайла {get;set;}//Имя файла
		///<summary>
		///Обработка обслуживания торгового оборудования.
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public ХранилищеЗначения Обработка {get;set;}//Обработка обслуживания
		///<summary>
		///Уникальный идентификатор обработки обслуживания.
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public string/*(36)*/ Идентификатор {get;set;}
		///<summary>
		///Версия API механизма торгового, поддерживаемого обработкой обслуживания.
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(10.2)*/ ВерсияAPI {get;set;}//Версия API
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
						Insert Into _Reference168(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld2990
						,_Fld2991RRef
						,_Fld2992
						,_Fld2993
						,_Fld2995
						,_Fld2996)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@Описание
						,@Вид
						,@ИмяФайла
						,@Обработка
						,@Идентификатор
						,@ВерсияAPI)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference168
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2990	= @Описание
						,_Fld2991RRef	= @Вид
						,_Fld2992	= @ИмяФайла
						,_Fld2993	= @Обработка
						,_Fld2995	= @Идентификатор
						,_Fld2996	= @ВерсияAPI
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Описание", Описание);
					Команда.Parameters.AddWithValue("Вид", Вид.Ключ());
					Команда.Parameters.AddWithValue("ИмяФайла", ИмяФайла);
					Команда.Parameters.AddWithValue("Обработка",new byte[0]);
					Команда.Parameters.AddWithValue("Идентификатор", Идентификатор);
					Команда.Parameters.AddWithValue("ВерсияAPI", ВерсияAPI);
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
					Команда.CommandText = @"Delete _Reference168
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/
		///////////////////////////////////////////////////////////////////////////////
		//// ОБРАБОТЧИКИ СОБЫТИЙ
		// Процедура - обработчик события "Перед записью".
		//
		// Параметры:
		//  Отказ - <Булево>
		//        - Признак отказа от записи элемента. Если в теле
		//          процедуры-обработчика установить данному параметру
		//          значение Истина, запись элемента выполнена не будет.
		//          Значение по умолчанию: Ложь.
		//

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*Не ОбменДанными.Загрузка*/)
			{
				if(true/*ПустаяСтрока(Идентификатор)*/)
				{
					//ОбщегоНазначения.СообщитьОбОшибке("Не указан идентификатор обработки обслуживания!");
					//Отказ = Истина;
				}
			}
		}
	}
}