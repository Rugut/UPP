Ext.define('Обработки.ПодготовкаДанныхПФР2010.ФормаПодбораДокументов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:534px;height:426px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'Отчетный период',
					width:'100',
				},
				{
					text:'Комплект документов',
					width:'135',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:401px;width:534px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Подобрать принятые ПФР комплекты сведений - проведенные документы "Опись АДВ-6-2" за соответствующие отчетные периоды',
			style: 'position:absolute;left:46px;top:42px;width:480px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Загрузить ранее принятые ПФР файлы сведений по',
			style: 'position:absolute;left:46px;top:253px;width:272px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗагрузить',
			text: 'Загрузить',
			style: 'position:absolute;left:61px;top:353px;width:90px;height:39px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Файл Описи АДВ-6-2:',
			style: 'position:absolute;left:46px;top:278px;width:114px;height:19px;',
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
			xtype: 'radio',
			boxLabel: 'Загрузить в существующий комплект',
			style: 'position:absolute;left:61px;top:302px;width:216px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Создать новый комплект сведений',
			style: 'position:absolute;left:61px;top:326px;width:216px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодготовкиДокументов',
			text: 'Выбрана Опись АДВ-6-2 за 2 полугодие 2010 года, пачка № 99999, содержит 100 исходных, 100 корректирующих форм СЗВ-6. Для загрузки принятых ПФРом сведений нажмите кнопку Загрузить.',
			style: 'position:absolute;left:182px;top:353px;width:344px;height:39px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:326px;top:253px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыМожете',
			text: 'Вы можете:',
			style: 'position:absolute;left:8px;top:8px;width:88px;height:25px;',
		},
	]
});