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
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:57px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 96,
			height: 19,
			style: 'position:absolute;left:70px;top:57px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:168px;top:57px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 96,
			height: 19,
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
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ПолеВвода1',
			width: 233,
			height: 19,
			style: 'position:absolute;left:70px;top:33px;width:233px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Выбор документов для обработки',
			style: 'position:absolute;left:8px;top:81px;width:441px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Документы для обработки',
			style: 'position:absolute;left:8px;top:144px;width:441px;height:16px;',
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
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Расчет по модели бюджетирования',
					width:'220',
					dataIndex:'РасчетПоМоделиБюджетирования',
					flex:1,
				},
				{
					text:'Сценарий',
					width:'171',
					dataIndex:'Сценарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентныйПересчетПоМоделямБюджетирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'РасчетПоМоделиБюджетирования',
					},
					{
						name:'Сценарий',
					},
				]
			},
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
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
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:457px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:303px;width:457px;height:25px;',
			dock: 'bottom',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:165px;width:441px;height:24px;',
			dock: 'top',
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