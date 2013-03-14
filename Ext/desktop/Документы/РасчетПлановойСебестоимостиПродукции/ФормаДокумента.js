Ext.define('Документы.РасчетПлановойСебестоимостиПродукции.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:370px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расчет плановой себестоимости продукции',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:345px;width:608px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:134px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:52px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:152px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:592px;height:226px;',
			height: 226,width: 592,
			items:
			[
				{
					title:'Параметры расчета',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПроцентСкидкиНаценки',
			text: 'Процент накладных расходов:',
			style: 'position:absolute;left:6px;top:154px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентНакладныхРасходов',
			style: 'position:absolute;left:166px;top:154px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Тип цен для оценки затрат:',
			style: 'position:absolute;left:6px;top:130px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:166px;top:130px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаЦены',
			text: 'Надпись валюта цены',
			style: 'position:absolute;left:348px;top:130px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнить',
			text: 'Рассчитать',
			style: 'position:absolute;left:6px;top:181px;width:101px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:578px;height:116px;',
			height: 116,width: 578,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'100',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Тип группы',
					width:'275',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Применение',
					width:'75',
				},
				{
					text:'Левое значение',
					width:'100',
				},
				{
					text:'Вид сравнения',
					width:'75',
				},
				{
					text:'Правое значение',
					width:'50',
				},
				{
					text:'Дата',
					width:'50',
				},
				{
					text:'Режим отображения',
					width:'75',
				},
				{
					text:'Представление',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Себестоимость',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:578px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:578px;height:170px;',
			height: 170,width: 578,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Продукция (услуга)',
					width:'170',
				},
				{
					text:'Характеристика продукции',
					width:'170',
				},
				{
					text:'Спецификация',
					width:'150',
				},
				{
					text:'Количество',
					width:'80',
				},
				{
					text:'Ед.',
					width:'54',
				},
				{
					text:'Себестоимость',
					width:'120',
				},
			]
		},
					]
				},
				{
					title:'Состав затрат',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:578px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:578px;height:170px;',
			height: 170,width: 578,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Продукция (услуга)',
					width:'120',
				},
				{
					text:'Характеристика продукции',
					width:'120',
				},
				{
					text:'Спецификация',
					width:'120',
				},
				{
					text:'Затрата',
					width:'120',
				},
				{
					text:'Характеристика затраты',
					width:'120',
				},
				{
					text:'Количество',
					width:'80',
				},
				{
					text:'Ед.',
					width:'54',
				},
				{
					text:'Цена',
					width:'80',
				},
				{
					text:'Сумма',
					width:'120',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:294px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:294px;width:504px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:318px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:318px;width:504px;height:19px;',
		},
	]
});