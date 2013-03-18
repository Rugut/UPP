Ext.define('Справочники.НоменклатурныеУзлы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:641px;height:377px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Номенклатурные узлы',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:527px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:569px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:431px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояние',
			text: 'Состояние:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:94px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаУтверждения',
			text: 'Дата утверждения:',
			style: 'position:absolute;left:216px;top:57px;width:108px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУтверждения',
			style: 'position:absolute;left:326px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:625px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:625px;height:220px;',
			height: 220,width: 625,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Вид норматива',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'120',
				},
				{
					text:'Характеристика',
					width:'120',
				},
				{
					text:'Количество',
					width:'64',
				},
				{
					text:'Единица',
					width:'54',
				},
				{
					text:'Статья затрат',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:641px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:352px;width:641px;height:25px;',
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
	]
});