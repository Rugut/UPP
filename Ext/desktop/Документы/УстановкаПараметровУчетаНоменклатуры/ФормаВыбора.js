Ext.define('Документы.УстановкаПараметровУчетаНоменклатуры.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка параметров учета номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Выбрать',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'Установить пометку удаления',
				},
				'-',
				'-',
				{
					text:'Обновить',
				},
			]
		},
	]
});