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
				},
				{
					title:'РеквизитыСчетаКонтрагента',
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