Ext.define('Обработки.ПодготовкаДанныхПФР2010.ФормаПодбораДокументов',
	{
	extend: 'Ext.window.Window',
	height: 426,width: 534,
	iconCls: 'bogus',
	title: 'Подбор документов прошлых периодов, принятых ПФР',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:46px;top:74px;width:480px;height:166px;',
			height: 166,width: 480,
			columns:
			[
				{
					text:'ОтчетныйПериод',
				},
				{
					text:'Пачка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:401px;width:534px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаЗагрузить',
			text: 'Загрузить',
			style: 'position:absolute;left:61px;top:353px;width:90px;height:39px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФайлаДанных',
			style: 'position:absolute;left:163px;top:278px;width:363px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументАДВ62ДляЗагрузки',
			style: 'position:absolute;left:289px;top:302px;width:237px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:326px;top:253px;width:200px;height:19px;',
		},
	]
});