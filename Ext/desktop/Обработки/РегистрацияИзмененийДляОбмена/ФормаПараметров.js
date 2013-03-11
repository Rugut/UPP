Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаПараметров',
	{
	extend: 'Ext.window.Window',
	height: 271,width: 396,
	iconCls: 'bogus',
	title: 'Параметры запроса',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:380px;height:24px;',
			items:
			[
				{
					text:'ПолучитьИзЗапроса',
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
				{
					text:'Разделитель',
				},
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
					text:'ИмяПараметра',
				},
				{
					text:'ЭтоВыражение',
				},
				{
					text:'ЗначениеПараметра',
				},
			]
		},
	]
});