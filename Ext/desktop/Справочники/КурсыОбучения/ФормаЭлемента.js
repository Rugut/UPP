Ext.define('Справочники.КурсыОбучения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:414px;height:477px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Курс обучения',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:312px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ОписаниеКурса',
			style: 'position:absolute;left:8px;top:110px;width:398px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДлительностьКурса',
			text: 'Объем курса*, часов:',
			style: 'position:absolute;left:8px;top:175px;width:180px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДлительностьКурса',
			style: 'position:absolute;left:188px;top:175px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗатратыНаОдногоОбучающегося',
			text: 'Затраты на одного обучающегося:',
			style: 'position:absolute;left:8px;top:200px;width:180px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗатратыНаОдногоОбучающегося',
			style: 'position:absolute;left:188px;top:200px;width:61px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокументаОбОбразовании',
			text: 'При прохождении курса может быть выдан документ:',
			style: 'position:absolute;left:8px;top:224px;width:398px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокументаОбОбразовании',
			style: 'position:absolute;left:8px;top:243px;width:398px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Валюта:',
			style: 'position:absolute;left:267px;top:200px;width:45px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Валюта',
			style: 'position:absolute;left:312px;top:200px;width:94px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:414px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:452px;width:414px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'*Составить по занятиям',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:268px;width:398px;height:176px;',
			height: 176,width: 398,
			items:
			[
				{
					title:'Состав курса',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:384px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:384px;height:120px;',
			height: 120,width: 384,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Занятие',
					width:'349',
				},
			]
		},
					]
				},
				{
					title:'Изучаемые компетенции*',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:384px;height:24px;',
			items:
			[
				'-',
				{
					text:'Коррекция весов',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:384px;height:120px;',
			height: 120,width: 384,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Компетенция',
					width:'242',
				},
				{
					text:'Вес изучения %',
					width:'98',
				},
			]
		},
					]
				},
				{
					title:'Регламентированный учет',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Отражать в регламентированном учете',
			style: 'position:absolute;left:6px;top:22px;width:384px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:56px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:56px;width:312px;height:19px;',
		},
	]
});