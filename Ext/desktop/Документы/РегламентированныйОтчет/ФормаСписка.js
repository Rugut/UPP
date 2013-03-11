Ext.define('Документы.РегламентированныйОтчет.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 425,width: 688,
	iconCls: 'bogus',
	title: 'Регламентированные отчеты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:116px;width:672px;height:277px;',
			height: 277,width: 672,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'НаименованиеОтчета',
				},
				{
					text:'Период',
				},
				{
					text:'Организация',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
				{
					text:'КодИМНС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:688px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'ДействиеОбновить',
				},
				{
					text:'ДействиеНовый',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеСправка',
				},
				{
					text:'ДействиеЖурналВыгрузки',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:107px;top:36px;width:573px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:110px;top:398px;width:570px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:238px;top:80px;width:257px;height:31px;',
			height: 31,width: 257,
			items:
			[
				{
					title:'ПроизвольныйПериод',
				},
				{
					title:'СтандартныйПериод',
				},
			]
		},
	]
});