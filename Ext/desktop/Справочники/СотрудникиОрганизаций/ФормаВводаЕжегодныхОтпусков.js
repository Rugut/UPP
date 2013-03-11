Ext.define('Справочники.СотрудникиОрганизаций.ФормаВводаЕжегодныхОтпусков',
	{
	extend: 'Ext.window.Window',
	height: 266,width: 400,
	iconCls: 'bogus',
	title: 'Ежегодные отпуска сотрудника',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:7px;width:384px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:31px;width:384px;height:202px;',
			height: 202,width: 384,
			columns:
			[
				{
					text:'ВидЕжегодногоОтпуска',
				},
				{
					text:'КоличествоДнейОтпускаВГод',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:241px;width:400px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});