
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
	///(общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class КомплектацияНоменклатуры:ДокументОбъект
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
		public V82.Перечисления/*Ссылка*/.ВидыКомплектации ВидКомплектации {get;set;}//Вид комплектации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийКомплектацияНоменклатуры ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.ЕдиницыИзмерения ЕдиницаИзмерения {get;set;}//Единица измерения номенклатуры
		[DataMember]
		[ProtoMember(12)]
		public object ЗаказВыпуска {get;set;}//Заказ выпуска
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public object ЗаказРезерв {get;set;}//Заказ резерв
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(15.3)*/ Количество {get;set;}//Количество номенклатуры
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(10.3)*/ Коэффициент {get;set;}//Коэффициент номенклатуры
		///<summary>
		///Необходимые действия по включению или исключению НДС в тоимости товаров при перемещении
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.Перечисления/*Ссылка*/.ДействиеНДСВСтоимостиТоваров НДСвСтоимостиТоваров {get;set;}//НДС в стоимости
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Номенклатура Номенклатура {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.НоменклатурныеГруппы НоменклатурнаяГруппа {get;set;}//Номенклатурная группа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.СерииНоменклатуры СерияНоменклатуры {get;set;}//Серия номенклатуры
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.СпецификацииНоменклатуры Спецификация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public V82.Перечисления/*Ссылка*/.СпособыСписанияОстаткаТоваров СпособСписанияОстаткаТоваров {get;set;}//Способ списания комплекта
		///<summary>
		///Статус партии
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public V82.Перечисления/*Ссылка*/.СтатусыПартийТоваров СтатусПартии {get;set;}//Статус партии
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатратСписанияНДС {get;set;}//Статья затрат списания НДС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public object СчетУчетаБУ {get;set;}//Счет учета комплекта (БУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public object СчетУчетаНУ {get;set;}//Счет учета комплекта (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(35)]
		public object СчетСписанияНДС {get;set;}//Счет списания НДС
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(36)]
		public object СубконтоСписанияНДС1 {get;set;}//Субконто 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(37)]
		public object СубконтоСписанияНДС2 {get;set;}//Субконто 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(38)]
		public object СубконтоСписанияНДС3 {get;set;}//Субконто 3
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(39)]
		public object СчетСписанияНДСНУ {get;set;}//Счет списания НДС (НУ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(40)]
		public object СубконтоСписанияНДСНУ1 {get;set;}//Субконто 1 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(41)]
		public object СубконтоСписанияНДСНУ2 {get;set;}//Субконто 2 (налоговый учет)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(42)]
		public object СубконтоСписанияНДСНУ3 {get;set;}//Субконто 3 (налоговый учет)
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(43)]
		public V82.СправочникиСсылка.ХарактеристикиНоменклатуры ХарактеристикаНоменклатуры {get;set;}//Характеристика номенклатуры
		[DataMember]
		[ProtoMember(44)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		[DataMember]
		[ProtoMember(45)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		[DataMember]
		[ProtoMember(46)]
		public object СчетЗатрат {get;set;}//Счет затрат (БУ)
		[DataMember]
		[ProtoMember(47)]
		public object СчетЗатратНУ {get;set;}//Счет затрат (НУ)
		[DataMember]
		[ProtoMember(48)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатрат {get;set;}//Статья затрат
		[DataMember]
		[ProtoMember(49)]
		public object Заказ {get;set;}//Заказ затрат
		///<summary>
		///(Общ) Цена, по которой материал был передан в переработку
		///</summary>
		[DataMember]
		[ProtoMember(50)]
		public decimal/*(15.2)*/ ЦенаПередачи {get;set;}//Цена передачи
		///<summary>
		///(Общ) Сумма, на которую материал был передан в переработку
		///</summary>
		[DataMember]
		[ProtoMember(51)]
		public decimal/*(15.2)*/ СуммаПередачи {get;set;}//Сумма передачи
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
						Insert Into _Document415(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld8690RRef
						,_Fld8691RRef
						,_Fld8692RRef
						,_Fld8695
						,_Fld8696
						,_Fld8697
						,_Fld8698RRef
						,_Fld8699RRef
						,_Fld8700RRef
						,_Fld8701RRef
						,_Fld8702RRef
						,_Fld8703
						,_Fld8704
						,_Fld8705
						,_Fld8706RRef
						,_Fld8707RRef
						,_Fld8708RRef
						,_Fld8709RRef
						,_Fld8710RRef
						,_Fld8711RRef
						,_Fld8712RRef
						,_Fld8713RRef
						,_Fld8714RRef
						,_Fld8715RRef
						,_Fld8716RRef
						,_Fld8717RRef
						,_Fld8718RRef
						,_Fld8719RRef
						,_Fld8720RRef
						,_Fld8721RRef
						,_Fld8722RRef
						,_Fld8723RRef
						,_Fld8724RRef
						,_Fld8725RRef
						,_Fld8726RRef
						,_Fld8727RRef
						,_Fld8728RRef
						,_Fld8729RRef
						,_Fld8731
						,_Fld8732)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВидКомплектации
						,@ВидОперации
						,@ЕдиницаИзмерения
						,@Количество
						,@Комментарий
						,@Коэффициент
						,@НДСвСтоимостиТоваров
						,@Номенклатура
						,@НоменклатурнаяГруппа
						,@Организация
						,@Ответственный
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@ОтражатьВУправленческомУчете
						,@Подразделение
						,@ПодразделениеОрганизации
						,@СерияНоменклатуры
						,@Склад
						,@Спецификация
						,@СпособСписанияОстаткаТоваров
						,@СтатусПартии
						,@СтатьяЗатратСписанияНДС
						,@СчетУчетаБУ
						,@СчетУчетаНУ
						,@СчетСписанияНДС
						,@СубконтоСписанияНДС1
						,@СубконтоСписанияНДС2
						,@СубконтоСписанияНДС3
						,@СчетСписанияНДСНУ
						,@СубконтоСписанияНДСНУ1
						,@СубконтоСписанияНДСНУ2
						,@СубконтоСписанияНДСНУ3
						,@ХарактеристикаНоменклатуры
						,@Контрагент
						,@ДоговорКонтрагента
						,@СчетЗатрат
						,@СчетЗатратНУ
						,@СтатьяЗатрат
						,@ЦенаПередачи
						,@СуммаПередачи)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document415
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld8690RRef	= @ВидКомплектации
						,_Fld8691RRef	= @ВидОперации
						,_Fld8692RRef	= @ЕдиницаИзмерения
						,_Fld8695	= @Количество
						,_Fld8696	= @Комментарий
						,_Fld8697	= @Коэффициент
						,_Fld8698RRef	= @НДСвСтоимостиТоваров
						,_Fld8699RRef	= @Номенклатура
						,_Fld8700RRef	= @НоменклатурнаяГруппа
						,_Fld8701RRef	= @Организация
						,_Fld8702RRef	= @Ответственный
						,_Fld8703	= @ОтражатьВБухгалтерскомУчете
						,_Fld8704	= @ОтражатьВНалоговомУчете
						,_Fld8705	= @ОтражатьВУправленческомУчете
						,_Fld8706RRef	= @Подразделение
						,_Fld8707RRef	= @ПодразделениеОрганизации
						,_Fld8708RRef	= @СерияНоменклатуры
						,_Fld8709RRef	= @Склад
						,_Fld8710RRef	= @Спецификация
						,_Fld8711RRef	= @СпособСписанияОстаткаТоваров
						,_Fld8712RRef	= @СтатусПартии
						,_Fld8713RRef	= @СтатьяЗатратСписанияНДС
						,_Fld8714RRef	= @СчетУчетаБУ
						,_Fld8715RRef	= @СчетУчетаНУ
						,_Fld8716RRef	= @СчетСписанияНДС
						,_Fld8717RRef	= @СубконтоСписанияНДС1
						,_Fld8718RRef	= @СубконтоСписанияНДС2
						,_Fld8719RRef	= @СубконтоСписанияНДС3
						,_Fld8720RRef	= @СчетСписанияНДСНУ
						,_Fld8721RRef	= @СубконтоСписанияНДСНУ1
						,_Fld8722RRef	= @СубконтоСписанияНДСНУ2
						,_Fld8723RRef	= @СубконтоСписанияНДСНУ3
						,_Fld8724RRef	= @ХарактеристикаНоменклатуры
						,_Fld8725RRef	= @Контрагент
						,_Fld8726RRef	= @ДоговорКонтрагента
						,_Fld8727RRef	= @СчетЗатрат
						,_Fld8728RRef	= @СчетЗатратНУ
						,_Fld8729RRef	= @СтатьяЗатрат
						,_Fld8731	= @ЦенаПередачи
						,_Fld8732	= @СуммаПередачи
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидКомплектации", ВидКомплектации.Ключ());
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("Количество", Количество);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("Коэффициент", Коэффициент);
					Команда.Parameters.AddWithValue("НДСвСтоимостиТоваров", НДСвСтоимостиТоваров.Ключ());
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("СпособСписанияОстаткаТоваров", СпособСписанияОстаткаТоваров.Ключ());
					Команда.Parameters.AddWithValue("СтатусПартии", СтатусПартии.Ключ());
					Команда.Parameters.AddWithValue("СчетУчетаБУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетСписанияНДС", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДС3", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетСписанияНДСНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоСписанияНДСНУ3", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетЗатрат", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетЗатратНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("ЦенаПередачи", ЦенаПередачи);
					Команда.Parameters.AddWithValue("СуммаПередачи", СуммаПередачи);
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
					Команда.CommandText = @"Delete _Document415
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}