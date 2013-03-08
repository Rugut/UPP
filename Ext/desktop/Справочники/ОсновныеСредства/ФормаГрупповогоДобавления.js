Ext.define('Справочники.ОсновныеСредства.ФормаГрупповогоДобавления',
	{
	extend: 'Ext.window.Window',
	height: 417,width: 414,
	iconCls: 'bogus',
	title: 'Групповое добавление элементов справочника ""Основные средства""',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:160px;top:125px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:160px;top:149px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Изготовитель',
			style: 'position:absolute;left:161px;top:173px;width:245px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыпуска',
			style: 'position:absolute;left:160px;top:245px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКОФ',
			style: 'position:absolute;left:161px;top:293px;width:245px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АмортизационнаяГруппа',
			style: 'position:absolute;left:160px;top:341px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаОС',
			style: 'position:absolute;left:160px;top:317px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаводскойНомер',
			style: 'position:absolute;left:160px;top:197px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПаспорта',
			style: 'position:absolute;left:160px;top:221px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачальныйКод',
			style: 'position:absolute;left:160px;top:53px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:160px;top:77px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Группа',
			style: 'position:absolute;left:160px;top:29px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонечныйКод',
			style: 'position:absolute;left:272px;top:53px;width:80px;height:19px;',
		},
	]
});