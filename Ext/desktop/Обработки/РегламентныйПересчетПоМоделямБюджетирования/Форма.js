Ext.define('Обработки.РегламентныйПересчетПоМоделямБюджетирования.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:457px;height:328px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Регламентный пересчет по моделям бюджетирования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:457px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:303px;width:457px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:57px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:70px;top:57px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:168px;top:57px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:186px;top:57px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:284px;top:57px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:70px;top:33px;width:233px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:189px;width:441px;height:106px;',
			height: 106,width: 441,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Расчет по модели бюджетирования',
					width:'220',
				},
				{
					text:'Сценарий',
					width:'171',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:165px;width:441px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Заполнить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Изменить',
				},
				'-',
				{
					text:'&Переместить вниз',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
	]
});