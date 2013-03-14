Ext.define('Справочники.РегламентированныеОтчеты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:677px;height:390px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регламентированные отчеты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:200px;top:33px;width:469px;height:280px;',
			height: 280,width: 469,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'48',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:186px;height:280px;',
			height: 280,width: 186,
			columns:
			[
				{
					text:'Наименование',
					width:'160',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:677px;height:25px;',
			items:
			[
				{
					text:'Добавить',
				},
				'-',
				{
					text:'Новая группа',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'Найти в дереве',
				},
				'-',
				{
					text:'Переместить вверх',
				},
				{
					text:'Переместить вниз',
				},
				'-',
				{
					text:'Скрыть',
				},
				{
					text:'Восстановить',
				},
				'-',
				{
					text:'Новый',
				},
				'-',
				{
					text:'Подробнее',
				},
				'-',
				{
					text:'Журнал',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеОтчета',
			text: '',
			style: 'position:absolute;left:8px;top:342px;width:661px;height:40px;',
		},
	]
});