Ext.define('Справочники.КоэффициентыСтажа.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:438px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Размеры начислений в зависимости от стажа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:438px;height:25px;',
			items:
			[
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Редактировать код',
				},
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'Скопировать',
				},
				{
					text:'Скопировать',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:438px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:316px;top:33px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:350px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:99px;width:422px;height:160px;',
			height: 160,width: 422,
			columns:
			[
				{
					text:'С',
					width:'80',
				},
				{
					text:'По',
					width:'80',
				},
				{
					text:'Размер',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:75px;width:422px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Обновить',
				},
				{
					text:'&Переместить вверх',
				},
			]
		},
	]
});