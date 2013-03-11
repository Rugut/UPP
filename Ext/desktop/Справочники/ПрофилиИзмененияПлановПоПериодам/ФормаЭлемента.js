Ext.define('Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 377,width: 462,
	iconCls: 'bogus',
	title: 'Профили изменения планов по периодам',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:110px;top:34px;width:220px;height:19px;',
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
				{
					text:'Разделитель',
				},
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
					text:'НомерСтроки',
				},
				{
					text:'НомерПериода',
				},
				{
					text:'Коэффициент',
				},
			]
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
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:374px;top:33px;width:80px;height:19px;',
		},
	]
});