Ext.define('Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:462px;height:377px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Профили изменения планов по периодам',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:34px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:110px;top:34px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодСмещения',
			text: 'Период смещения:',
			style: 'position:absolute;left:8px;top:57px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодСмещения',
			style: 'position:absolute;left:110px;top:57px;width:100px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:446px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:446px;height:220px;',
			height: 220,width: 446,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номер периода',
					width:'120',
					dataIndex:'НомерПериода',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'80',
					dataIndex:'Коэффициент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрофилиИзмененияПлановПоПериодам/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'НомерПериода',
					},
					{
						name:'Коэффициент',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:462px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:352px;width:462px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:332px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:374px;top:33px;width:80px;height:19px;',
		},
	]
});