Ext.define('Справочники.СтатьиОтчетаОПрибыляхИУбытках.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:324px;height:336px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи отчета о прибылях и убытках',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодДляОтчета',
			style: 'position:absolute;left:96px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:164px;width:308px;height:139px;',
			height: 139,width: 308,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Статья оборотов',
					width:'241',
				},
				{
					text:'Знак',
					width:'35',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:324px;height:25px;',
			items:
			[
				'-',
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:140px;width:308px;height:24px;',
			items:
			[
				{
					text:'&Изменить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Добавить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:324px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Справка',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Записать',
				},
				{
					text:'Найти в списке',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'НаименованиеДляОтчета',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:38px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Наименование для отчета:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:38px;',
		},
	]
});