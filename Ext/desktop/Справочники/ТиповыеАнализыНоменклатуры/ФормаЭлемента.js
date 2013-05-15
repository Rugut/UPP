Ext.define('Справочники.ТиповыеАнализыНоменклатуры.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:480px;height:309px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Типовые анализы номенклатуры',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:389px;top:57px;width:23px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			style: 'position:absolute;left:417px;top:57px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:88px;top:57px;width:296px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Родитель:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Родитель',
			style: 'position:absolute;left:88px;top:33px;width:384px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:132px;width:464px;height:144px;',
			height: 144,width: 464,
			columns:
			[
				{
					text:'N',
					width:'43',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Показатель анализа',
					width:'414',
					dataIndex:'ПоказательАнализа',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТиповыеАнализыНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ПоказательАнализа',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Показатели анализа',
			style: 'position:absolute;left:8px;top:89px;width:464px;height:17px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:480px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:284px;width:480px;height:25px;',
			dock: 'bottom',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:107px;width:464px;height:24px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});