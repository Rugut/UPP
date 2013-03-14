Ext.define('Справочники.Номенклатура.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:793px;height:345px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Номенклатура',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:175px;top:57px;width:611px;height:130px;',
			height: 130,width: 611,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Артикул',
					width:'93',
				},
				{
					text:'Наименование',
					width:'183',
				},
				{
					text:'Полное наименование',
					width:'185',
				},
				{
					text:'Вид номенклатуры',
					width:'110',
				},
				{
					text:'Базовая единица измерения',
					width:'164',
				},
				{
					text:'Единица хранения остатков',
					width:'168',
				},
				{
					text:'Номер ГТД',
					width:'220',
				},
				{
					text:'Страна происхождения',
					width:'220',
				},
				{
					text:'Ставка НДС',
					width:'100',
				},
				{
					text:'Номенклатурная группа',
					width:'220',
				},
				{
					text:'Ценовая группа',
					width:'220',
				},
				{
					text:'Комментарий',
					width:'220',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:160px;height:130px;',
			height: 130,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:793px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Файлы',
				},
				{
					text:'Изображение',
				},
				{
					text:'Остатки товаров на складах',
				},
				'-',
					]
				},
				'-',
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				{
					text:'Свойства',
				},
				{
					text:'Категории',
				},
				'-',
				'-',
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:194px;width:160px;height:144px;',
			height: 144,width: 160,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:175px;top:194px;width:611px;height:144px;',
			height: 144,width: 611,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:149px;top:20px;width:462px;height:101px;',
			height: 101,width: 462,
			columns:
			[
				{
					text:'Характеристика/Склад',
					width:'151',
				},
				{
					text:'Ячейка склада',
					width:'87',
				},
				{
					text:'Общий',
					width:'60',
				},
				{
					text:'Свободный',
					width:'71',
				},
				{
					text:'Своб.ожид.',
					width:'68',
				},
				{
					text:'В резерве',
					width:'75',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:20px;width:143px;height:124px;',
			height: 124,width: 143,
			columns:
			[
				{
					text:'Типы цен',
					width:'133',
				},
				{
					text:'Ссылка',
					width:'82',
				},
				{
					text:'БазовыйТипЦен',
					width:'100',
				},
				{
					text:'Рассчитывается',
					width:'100',
				},
				{
					text:'ОкруглятьВБольшуюСторону',
					width:'100',
				},
				{
					text:'ПроцентСкидкиНаценки',
					width:'100',
				},
				{
					text:'Префикс',
					width:'100',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаЦены',
			style: 'position:absolute;left:476px;top:125px;width:135px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаЦены',
			text: 'Валюта:',
			style: 'position:absolute;left:427px;top:125px;width:45px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипРасчета',
			text: 'Валюта цены:',
			style: 'position:absolute;left:150px;top:125px;width:73px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораСпискаНоменклатуры',
			style: 'position:absolute;left:234px;top:33px;width:552px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗначениеОтбораСпискаНоменклатуры',
			text: 'содержит:',
			style: 'position:absolute;left:175px;top:33px;width:57px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:357px;top:95px;width:157px;height:24px;',
			items:
			[
				{
					text:'Пометить все типы цен',
				},
				{
					text:'Отменить пометку всех типов цен',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'Переместить вниз',
				},
			]
		},
	]
});