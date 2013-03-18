Ext.define('Обработки.ЗагрузкаДанныхCommerceML.ФормаЗаписанныхДокументов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:379px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Загруженные документы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:354px;width:600px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:76px;width:584px;height:270px;',
			height: 270,width: 584,
			columns:
			[
				{
					text:'Документ',
					width:'488',
				},
				{
					text:'Примечание',
					width:'147',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:46px;width:584px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Установить/Снять пометку на удаление',
				},
				{
					text:'Удалить непосредственно',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗагруженныхДокументов',
			text: 'Надпись загрузки документов. Информация по загруженным документам приведена ниже:',
			style: 'position:absolute;left:47px;top:8px;width:545px;height:32px;',
		},
	]
});