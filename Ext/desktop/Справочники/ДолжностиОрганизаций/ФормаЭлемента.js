Ext.define('Справочники.ДолжностиОрганизаций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 473,width: 565,
	iconCls: 'bogus',
	title: 'Должности организаций',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:477px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:342px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:565px;height:25px;',
			items:
			[
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:448px;width:565px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКПДТР',
			style: 'position:absolute;left:98px;top:59px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:100px;width:549px;height:340px;',
			height: 340,width: 549,
			items:
			[
				{
					title:'Общее',
				},
				{
					title:'Дополнительно',
				},
				{
					title:'ЕжегодныеОтпуска',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:549px;height:16px;',
			height: 16,width: 549,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});