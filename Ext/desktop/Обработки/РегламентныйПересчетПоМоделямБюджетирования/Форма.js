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
					xtype: 'tbfill'
				},
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
			style: 'position:absolute;left:8px;top:57px;width:60px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:168px;top:57px;width:16px;height:19px;text-align:left;',
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
			xtype: 'radio',
			boxLabel: 'Автоматически по указанным параметрам',
			style: 'position:absolute;left:14px;top:102px;width:268px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Вручную',
			style: 'position:absolute;left:14px;top:123px;width:268px;height:16px;',
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
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
	]
});