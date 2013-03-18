Ext.define('Справочники.ХарактеристикиНоменклатуры.ФормаВыбораСРасширеннымОтбором',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:396px;height:486px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Характеристики номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:461px;width:396px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выбрать / Ввести',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:29px;width:380px;height:24px;',
			items:
			[
				{
					text:'Равенство',
				},
				{
					text:'Содержит',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:53px;width:380px;height:172px;',
			height: 172,width: 380,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Свойство',
					width:'179',
				},
				{
					text:'Значение',
					width:'100',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:281px;width:380px;height:172px;',
			height: 172,width: 380,
			columns:
			[
				{
					text:'Характеристика',
					width:'251',
				},
				{
					text:'Характеристика ссылка',
					width:'153',
				},
				{
					text:'Пометка удаления',
					width:'100',
				},
				{
					text:'Свойство',
					width:'131',
				},
				{
					text:'Значение',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:257px;width:380px;height:24px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Свернуть все',
				},
				{
					text:'Развернуть все',
				},
				'-',
				{
					text:'Отображать активные',
				},
			]
		},
	]
});