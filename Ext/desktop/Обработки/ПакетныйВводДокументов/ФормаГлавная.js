Ext.define('Обработки.ПакетныйВводДокументов.ФормаГлавная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:699px;height:474px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Пакетный ввод документов',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:684px;height:433px;',
			height: 433,width: 684,
			items:
			[
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата документов:',
			style: 'position:absolute;left:417px;top:6px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаАктуальности',
			style: 'position:absolute;left:545px;top:6px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Организация:',
			style: 'position:absolute;left:11px;top:110px;width:70px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОрганизация',
			style: 'position:absolute;left:113px;top:110px;width:294px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить в упр. учете',
			style: 'position:absolute;left:417px;top:86px;width:145px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить в бух. учете',
			style: 'position:absolute;left:417px;top:110px;width:145px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Склад:',
			style: 'position:absolute;left:11px;top:86px;width:70px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаСклад',
			style: 'position:absolute;left:113px;top:86px;width:294px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Распределить:',
			style: 'position:absolute;left:6px;top:6px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Тип цен:',
			style: 'position:absolute;left:11px;top:199px;width:61px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТипЦен',
			style: 'position:absolute;left:113px;top:199px;width:294px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать НДС',
			style: 'position:absolute;left:417px;top:201px;width:106px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Оформлять :',
			style: 'position:absolute;left:11px;top:62px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Цена включает НДС',
			style: 'position:absolute;left:535px;top:201px;width:128px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПодразделение',
			style: 'position:absolute;left:113px;top:272px;width:294px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Подразделение:',
			style: 'position:absolute;left:11px;top:272px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОтветственный',
			style: 'position:absolute;left:504px;top:272px;width:171px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Расчет цен:',
			style: 'position:absolute;left:11px;top:175px;width:61px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Ответственный:',
			style: 'position:absolute;left:417px;top:272px;width:82px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Провести',
			style: 'position:absolute;left:11px;top:350px;width:73px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печать реестра сформированных документов',
			style: 'position:absolute;left:113px;top:394px;width:259px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формирование печатных форм документов в количестве',
			style: 'position:absolute;left:113px;top:350px;width:315px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Без просмотра',
			style: 'position:absolute;left:229px;top:374px;width:101px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'С просмотром',
			style: 'position:absolute;left:113px;top:374px;width:101px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По значениям по умолчанию из договора',
			style: 'position:absolute;left:113px;top:175px;width:233px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Процент скидки:',
			style: 'position:absolute;left:11px;top:223px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПроцентСкидкиНаценки',
			style: 'position:absolute;left:113px;top:223px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаКоличествоЭкземпляров',
			style: 'position:absolute;left:431px;top:350px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Банк / Касса:',
			style: 'position:absolute;left:11px;top:134px;width:70px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаСтруктурнаяЕдиница',
			style: 'position:absolute;left:113px;top:134px;width:294px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выписывать счет-фактуру',
			style: 'position:absolute;left:417px;top:62px;width:155px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПоступления',
			text: 'Дата поступления:',
			style: 'position:absolute;left:11px;top:296px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПоступления',
			style: 'position:absolute;left:113px;top:296px;width:101px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить в налог. учете',
			style: 'position:absolute;left:417px;top:134px;width:145px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРасчетаОстатков',
			text: 'Дата расчета остатков:',
			style: 'position:absolute;left:417px;top:30px;width:122px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаРасчетаОстатков',
			style: 'position:absolute;left:545px;top:30px;width:85px;height:19px;',
		},
					]
				},
				{
					title:'Таблица',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:670px;height:377px;',
			height: 377,width: 670,
			columns:
			[
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'100',
				},
				{
					text:'Номенклатура',
					width:'180',
				},
				{
					text:'Характеристика',
					width:'180',
				},
				{
					text:'Серия номенклатуры',
					width:'110',
				},
				{
					text:'Ед.',
					width:'44',
				},
				{
					text:'К.',
					width:'37',
				},
				{
					text:'Товар / тара',
					width:'81',
				},
				{
					text:'Остаток',
					width:'81',
				},
				{
					text:'Не распределено',
					width:'93',
				},
				{
					text:'Заказ покупателя',
					width:'242',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:670px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Добавить...',
				},
				{
					text:'Удалить колонку',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:449px;width:698px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});