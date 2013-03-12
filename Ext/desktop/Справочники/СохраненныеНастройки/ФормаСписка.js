Ext.define('Справочники.СохраненныеНастройки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:673px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Варианты отчетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:657px;height:259px;',
			height: 259,width: 657,
			columns:
			[
				{
					text:'Отчет',
					width:'155',
				},
				{
					text:'Наименование',
					width:'172',
				},
				{
					text:'Описание',
					width:'210',
				},
				{
					text:'Пользователи',
					width:'139',
				},
				{
					text:'Тип настройки',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:673px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Загрузить настройку из файла',
				},
				{
					text:'Сохранить настройки в файл ',
				},
				{
					text:'Загрузить настройку по умолчанию',
				},
				'-',
				'-',
				'-',
			]
		},
	]
});