Ext.define('Документы.ПередачаСЗВ4вПФР.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 184,width: 269,
	iconCls: 'bogus',
	title: 'Передача СЗВ-4 в ПФР',
	
	items: [
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:17px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:222px;top:33px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораФормы',
			text: 'Выбрать форму',
			style: 'position:absolute;left:17px;top:128px;width:100px;height:19px;',
		},
	]
});