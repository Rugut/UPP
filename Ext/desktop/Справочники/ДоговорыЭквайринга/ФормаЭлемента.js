Ext.define('Справочники.ДоговорыЭквайринга.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:439px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Договор эквайринга',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:340px;top:33px;width:25px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:369px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:148px;top:33px;width:184px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЭквайрер',
			text: 'Эквайрер:',
			style: 'position:absolute;left:8px;top:56px;width:53px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Эквайрер',
			style: 'position:absolute;left:148px;top:56px;width:281px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорВзаиморасчетов',
			text: 'Договор взаиморасчетов:',
			style: 'position:absolute;left:8px;top:79px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Договор',
			style: 'position:absolute;left:148px;top:79px;width:281px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:121px;width:421px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:145px;width:421px;height:114px;',
			height: 114,width: 421,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Вид оплаты',
					width:'275',
				},
				{
					text:'% торговой уступки',
					width:'105',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:439px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:439px;height:25px;',
			items:
			[
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
	]
});