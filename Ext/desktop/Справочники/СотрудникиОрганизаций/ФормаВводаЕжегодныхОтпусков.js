Ext.define('Справочники.СотрудникиОрганизаций.ФормаВводаЕжегодныхОтпусков',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:266px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ежегодные отпуска сотрудника',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:7px;width:384px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
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
					text:'Вид ежегодного отпуска',
					width:'140',
				},
				{
					text:'Количество дней отпуска в год',
					width:'170',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:241px;width:400px;height:25px;',
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
					text:'Закрыть',
				},
			]
		},
	]
});