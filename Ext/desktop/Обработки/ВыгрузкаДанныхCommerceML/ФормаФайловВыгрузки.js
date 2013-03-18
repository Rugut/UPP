Ext.define('Обработки.ВыгрузкаДанныхCommerceML.ФормаФайловВыгрузки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:476px;height:367px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выгруженные файлы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:342px;width:476px;height:25px;',
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
			style: 'position:absolute;left:8px;top:89px;width:460px;height:245px;',
			height: 245,width: 460,
			columns:
			[
				{
					text:'Контрагент',
					width:'200',
				},
				{
					text:'Имя файла',
					width:'200',
				},
				{
					text:'Кол-во документов',
					width:'100',
				},
				{
					text:'Успешно',
					width:'60',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВыгрузкиДокументов',
			text: 'Надпись выгрузки документов. Информация по выгруженным файлам приведена ниже:',
			style: 'position:absolute;left:50px;top:8px;width:418px;height:32px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКаталогВыгрузкиДанных',
			text: 'Каталог выгрузки данных:',
			style: 'position:absolute;left:8px;top:45px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КаталогВыгрузкиДанных',
			style: 'position:absolute;left:151px;top:45px;width:317px;height:19px;',
		},
	]
});