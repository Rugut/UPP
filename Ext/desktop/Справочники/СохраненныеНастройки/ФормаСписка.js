Ext.define('Справочники.СохраненныеНастройки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 673,
	iconCls: 'bogus',
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
					text:'НастраиваемыйОбъект',
				},
				{
					text:'Наименование',
				},
				{
					text:'Описание',
				},
				{
					text:'Пользователи',
				},
				{
					text:'ТипНастройки',
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
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель4',
				},
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
					text:'ЗагрузитьНастройку',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'ВернутьсяКЗаводскимНастройкам',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});