Ext.define('Обработки.ОтправкаЭлектронногоСообщенияВОтделТехническойПоддержки.Форма',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 780,
	iconCls: 'bogus',
	title: 'Отправка электронного сообщения в отдел технической поддержки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:313px;width:764px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:337px;width:764px;height:80px;',
			height: 80,width: 764,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ПутьКФайлу',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:780px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'НастройкаПараметров',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ЗаполнитьТекст',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Отправить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТемаСообщения',
			style: 'position:absolute;left:47px;top:8px;width:520px;height:19px;',
		},
	]
});