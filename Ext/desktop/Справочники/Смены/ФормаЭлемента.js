Ext.define('Справочники.Смены.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 353,width: 446,
	iconCls: 'bogus',
	title: 'Смена',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:76px;width:430px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:100px;width:430px;height:220px;',
			height: 220,width: 430,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВремяНачала',
				},
				{
					text:'ВремяОкончания',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:446px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю',
				},
				{
					text:'РедактироватьКодНомер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:328px;width:446px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});