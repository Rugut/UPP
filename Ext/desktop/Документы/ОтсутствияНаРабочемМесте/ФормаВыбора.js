Ext.define('Документы.ОтсутствияНаРабочемМесте.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:871px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отсутствия на рабочем месте',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:855px;height:380px;',
			height: 380,width: 855,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата регистрации',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Период отсутствия',
					width:'150',
				},
				{
					text:'Причина отсутствия',
					width:'120',
				},
				{
					text:'Зарегистрировал',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:871px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
			]
		},
	]
});