
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПодразделенияОрганизаций:СправочникОбъект
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
		public Guid Владелец {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public Guid Родитель {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.ВидыПодразделений ВидПодразделения {get;set;}//Вид подразделения
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(11)*/ КодПоОКАТО {get;set;}//Код по ОКАТО
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public string/*(9)*/ КПП {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(5.2)*/ РайонныйКоэффициент {get;set;}//Районный коэффициент
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(5.2)*/ РайонныйКоэффициентРФ {get;set;}//Районный коэффициент РФ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.ТерриториальныеУсловия ТерриториальныеУсловияПФР {get;set;}//Территориальные условия ПФР
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(6)*/ Порядок {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public bool СоответствуетСудамПодФлагомРФ {get;set;}//Соответствует судам под флагом РФ
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
						Insert Into _Reference192(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_OwnerIDRRef
						,_ParentIDRRef
						,_Code
						,_Description
						,_Fld3202RRef
						,_Fld3203
						,_Fld3204
						,_Fld3205
						,_Fld3206
						,_Fld3207RRef
						,_Fld3208
						,_Fld3209)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Владелец
						,@Родитель
						,@Код
						,@Наименование
						,@ВидПодразделения
						,@КодПоОКАТО
						,@КПП
						,@РайонныйКоэффициент
						,@РайонныйКоэффициентРФ
						,@ТерриториальныеУсловияПФР
						,@Порядок
						,@СоответствуетСудамПодФлагомРФ)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference192
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_OwnerIDRRef	= @Владелец
						,_ParentIDRRef	= @Родитель
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld3202RRef	= @ВидПодразделения
						,_Fld3203	= @КодПоОКАТО
						,_Fld3204	= @КПП
						,_Fld3205	= @РайонныйКоэффициент
						,_Fld3206	= @РайонныйКоэффициентРФ
						,_Fld3207RRef	= @ТерриториальныеУсловияПФР
						,_Fld3208	= @Порядок
						,_Fld3209	= @СоответствуетСудамПодФлагомРФ
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Владелец", Владелец);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("ВидПодразделения", ВидПодразделения.Ключ());
					Команда.Parameters.AddWithValue("КодПоОКАТО", КодПоОКАТО);
					Команда.Parameters.AddWithValue("КПП", КПП);
					Команда.Parameters.AddWithValue("РайонныйКоэффициент", РайонныйКоэффициент);
					Команда.Parameters.AddWithValue("РайонныйКоэффициентРФ", РайонныйКоэффициентРФ);
					Команда.Parameters.AddWithValue("ТерриториальныеУсловияПФР", ТерриториальныеУсловияПФР.Ссылка);
					Команда.Parameters.AddWithValue("Порядок", Порядок);
					Команда.Parameters.AddWithValue("СоответствуетСудамПодФлагомРФ", СоответствуетСудамПодФлагомРФ);
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
					Команда.CommandText = @"Delete _Reference192
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/
		////////////////////////////////////////////////////////////////////////////////
		// ПЕРЕМЕННЫЕ МОДУЛЯ

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*ОбменДанными.Загрузка*/)
			{
			}
			//ПрошлыйИзмененныйРодительОбъектаДоступа = ?(Не ЭтоНовый() и Не Ссылка.Родитель = Родитель, Ссылка.Родитель, Неопределено);
			//НастройкаПравДоступа.ПередЗаписьюНовогоОбъектаСПравамиДоступаПользователей(ЭтотОбъект, Отказ, Родитель);
			if(true/*НЕ Отказ*/)
			{
				//ОбщегоНазначения.ПередЗаписьюОбъектаПорядка(Отказ, ЭтотОбъект, КонтролироватьПорядок);
			}
		}

		public void ПриЗаписи(/*Отказ*/)
		{
			if(true/*ОбменДанными.Загрузка*/)
			{
			}
			//НастройкаПравДоступа.ОбновитьПраваДоступаКИерархическимОбъектамПриНеобходимости(Ссылка, ПрошлыйИзмененныйРодительОбъектаДоступа, Отказ);
		}
		////////////////////////////////////////////////////////////////////////////////
		// ОПЕРАТОРЫ ОСНОВНОЙ ПРОГРАММЫ
	}
}