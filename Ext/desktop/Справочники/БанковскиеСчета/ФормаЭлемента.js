Ext.define('Справочники.БанковскиеСчета.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 521,width: 568,
	iconCls: 'bogus',
	title: 'Элемент Банковские счета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:568px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:496px;width:568px;height:25px;',
			items:
			[
				{
					text:'РазделительОК',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДенежныхСредств',
			style: 'position:absolute;left:492px;top:33px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСчета',
			style: 'position:absolute;left:336px;top:33px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСчета',
			style: 'position:absolute;left:102px;top:33px;width:155px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:102px;top:469px;width:374px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БИКБанка',
			style: 'position:absolute;left:102px;top:82px;width:155px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррсчетБанка',
			style: 'position:absolute;left:336px;top:82px;width:224px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:157px;width:552px;height:65px;',
			height: 65,width: 552,
			items:
			[
				{
					title:'НепрямыеРасчеты',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БИКБанкаДляРасчетов',
			style: 'position:absolute;left:93px;top:21px;width:153px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррсчетБанкаДляРасчетов',
			style: 'position:absolute;left:328px;top:21px;width:224px;height:19px;',
		},
					]
				},
				{
					title:'ПрямыеРасчеты',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:246px;width:552px;height:213px;',
			height: 213,width: 552,
			items:
			[
				{
					title:'РеквизитыСчетаОрганизации',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерИДатаРазрешения',
			style: 'position:absolute;left:205px;top:194px;width:346px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекстПлательщика',
			style: 'position:absolute;left:0px;top:21px;width:551px;height:33px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОткрытия',
			style: 'position:absolute;left:94px;top:170px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЗакрытия',
			style: 'position:absolute;left:94px;top:194px;width:96px;height:19px;',
		},
					]
				},
				{
					title:'РеквизитыСчетаКонтрагента',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекстНазначения',
			style: 'position:absolute;left:0px;top:76px;width:550px;height:53px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекстПолучателя',
			style: 'position:absolute;left:0px;top:21px;width:550px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:520px;top:469px;width:40px;height:19px;',
		},
	]
});