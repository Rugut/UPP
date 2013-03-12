Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаПараметров',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:396px;height:271px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Параметры запроса',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:380px;height:24px;',
			items:
			[
				{
					text:'Получить из запроса',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:34px;width:380px;height:229px;',
			height: 229,width: 380,
			columns:
			[
				{
					text:'Имя параметра',
					width:'150',
				},
				{
					text:'В',
					width:'21',
				},
				{
					text:'Значение параметра',
					width:'192',
				},
			]
		},
	]
});